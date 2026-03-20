import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp08Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP08 — 조직 내 리소스 안전하게 공유</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        여러 AWS 계정으로 구성된 조직 내에서 VPC, 서브넷, Transit Gateway, 라이선스 등 리소스를
        공유할 때 AWS Resource Access Manager(RAM)를 사용하여 안전하고 중앙에서 관리되는 방식으로
        공유합니다. 조직 내 공유는 인터넷 노출 없이 네트워크 경계 안에서 이루어져야 합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        조직 내 계정 간 리소스 공유는 AWS RAM을 통해 이루어지며, 공유 범위는 조직 또는 특정 OU로
        제한됩니다. 공유된 리소스에 대한 접근은 최소 권한 원칙에 따라 관리되고, 공유 리소스 현황이
        중앙에서 가시화됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>리소스를 공유하기 위해 계정 간 광범위한 IAM 역할 신뢰 관계를 설정함</li>
        <li>AWS RAM 대신 리소스 기반 정책에서 와일드카드("*")를 사용하여 무제한 접근 허용</li>
        <li>조직 외부 계정에 내부 리소스를 실수로 공유함</li>
        <li>공유된 리소스의 목록과 공유 대상을 중앙에서 추적하지 않음</li>
        <li>공유된 VPC 서브넷에 대한 접근 제어 없이 모든 OU가 모든 서브넷을 사용할 수 있게 함</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>중앙 집중식 리소스 공유로 중복 리소스 생성 방지 및 비용 절감</li>
        <li>조직 경계 외부로의 리소스 공유 실수 방지</li>
        <li>공유 리소스에 대한 가시성 및 거버넌스 확보</li>
        <li>네트워크 리소스 공유 시 보안 경계를 유지하면서 운영 효율성 향상</li>
        <li>일관된 공유 메커니즘으로 감사 및 규정 준수 관리 단순화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Organizations에서 RAM 공유 활성화를 설정하여 조직 내 계정 간 초대 없이 리소스를 공유할 수 있도록 합니다.</li>
        <li>AWS RAM에서 리소스를 공유할 때 특정 계정이 아닌 조직 또는 OU를 대상으로 지정하여 새 계정 추가 시 자동으로 포함되도록 합니다.</li>
        <li>공유 가능한 리소스 유형(VPC 서브넷, Transit Gateway, Route 53 해석기 규칙, License Manager 구성 등)을 파악하고 공유 정책을 수립합니다.</li>
        <li>SCP를 사용하여 조직 외부로의 RAM 공유를 차단합니다(ram:CreateResourceShare 조건 사용).</li>
        <li>공유 VPC 아키텍처를 구현하여 네트워킹 계정에서 서브넷을 관리하고 워크로드 계정에 공유함으로써 네트워크 거버넌스를 중앙화합니다.</li>
        <li>AWS Config 규칙을 사용하여 RAM 공유 리소스의 현황을 추적하고 비인가 공유를 감지합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Resource Access Manager(RAM) — 계정 및 조직 간 AWS 리소스 안전 공유</li>
        <li>AWS Organizations — 조직 구조 기반 리소스 공유 대상 정의</li>
        <li>Amazon VPC 공유 — 중앙 관리 VPC 서브넷을 여러 계정과 공유</li>
        <li>AWS Transit Gateway — 계정 간 네트워크 연결 중앙 관리</li>
        <li>AWS License Manager — 소프트웨어 라이선스 중앙 관리 및 공유</li>
      </ul>
      <PageNav />
    </article>
  );
}
