import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp07Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP07 — 퍼블릭 및 교차 계정 액세스 분석</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 의도치 않은 퍼블릭 또는 교차 계정 접근으로 인한 데이터 노출 위험이 있습니다.</p>
      </div>
      <p>
        어떤 AWS 리소스가 공유되고 누구와 공유되는지 파악합니다. 공유된 리소스를 지속적으로 모니터링하고 감사하여 승인된 주체에게만 공유되는지 확인합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>공유된 리소스와 공유 대상 파악</li>
        <li>공유 리소스의 지속적인 모니터링 및 감사</li>
        <li>승인된 주체에게만 리소스 공유 확인</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>공유된 리소스 목록 미유지</li>
        <li>교차 계정 또는 퍼블릭 리소스 접근 승인 프로세스 부재</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>필요한 리소스에만 퍼블릭 및 교차 계정 접근 축소</li>
        <li>계정 외부에서의 모든 리소스 접근 경로 식별</li>
        <li>잘못 구성된 리소스의 사전 탐지 및 수정</li>
        <li>다중 계정 환경 전체의 가시성 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>리소스 기반 정책(S3 버킷 정책 등)에서 승인된 주체만 접근하도록 확인합니다.</li>
        <li>AWS Organizations와 함께 IAM Access Analyzer를 구성하여 포괄적인 가시성을 확보합니다.</li>
        <li>Access Preview를 사용하여 리소스 권한 배포 전 결과를 미리 확인합니다.</li>
        <li>AWS Config, Control Tower, Security Hub CSPM으로 탐지 제어를 구현합니다.</li>
        <li>S3 퍼블릭 접근 구성에 AWS Config 자동 수정을 활성화합니다.</li>
        <li>민감한 데이터 발견 및 보호에 Amazon Macie를 고려합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>IAM Access Analyzer — 공유 리소스 식별</li>
        <li>AWS Config — 규정 준수 모니터링</li>
        <li>AWS Control Tower — 제어 라이브러리</li>
        <li>AWS Security Hub CSPM — 중앙화된 발견사항 관리</li>
        <li>AWS Trusted Advisor — 보안 권고사항</li>
        <li>Amazon Macie — 민감한 데이터 발견 및 보호</li>
      </ul>
      <PageNav />
    </article>
  );
}
