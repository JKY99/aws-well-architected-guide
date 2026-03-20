import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus4Bp08Page() {
  return (
    <article className="doc-content">
      <h1>SUS04-BP08 — 재생성하기 어려운 데이터만 백업</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        비즈니스 가치가 없는 데이터의 백업을 피하여 워크로드의 스토리지 리소스 요구사항을 최소화합니다.
        비즈니스 가치가 있거나 규정 준수 요구사항을 충족하는 데 필요한 데이터만 백업합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        스토리지 리소스 소비를 줄이고 워크로드의 환경적 영향을 낮춥니다.
        백업 비용을 최적화하고 복구 목표를 준수합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>데이터에 대한 백업 전략이 없는 경우</li>
        <li>쉽게 재생성할 수 있는 데이터를 백업하는 경우</li>
        <li>임시 스토리지를 복구 가치 없이 백업하는 경우</li>
        <li>기본 위치에서 빠르게 복원할 수 있는 데이터의 로컬 복사본을 백업하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>스토리지 리소스 요구사항 최소화</li>
        <li>워크로드의 환경적 영향 절감</li>
        <li>전체 백업 비용 절감</li>
        <li>운영 효율성 향상</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>SUS04-BP01에 따라 데이터 분류 정책을 구현합니다.</li>
        <li>복구 시간 목표(RTO)와 복구 시점 목표(RPO)를 기반으로 백업 전략을 설계합니다.</li>
        <li>쉽게 재생성할 수 있는 데이터, 임시 데이터를 백업에서 제외합니다.</li>
        <li>SLA를 초과하지 않는 범위에서 복원 가능한 데이터의 로컬 복사본을 백업에서 제외합니다.</li>
        <li>AWS Backup을 사용하여 AWS 서비스, 클라우드, 온프레미스 전반의 데이터 보호를 중앙에서 자동화합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Backup — AWS 서비스 전반의 완전 관리형 중앙화된 데이터 보호</li>
        <li>Amazon EBS — 스냅샷을 통한 블록 스토리지 백업</li>
        <li>Amazon RDS — 자동화된 관계형 데이터베이스 백업</li>
        <li>Amazon EFS — 파일 시스템 백업 솔루션</li>
        <li>Amazon FSx — Windows 파일 서버 백업</li>
        <li>Amazon ElastiCache — Redis OSS 백업 및 복원</li>
      </ul>

      <PageNav />
    </article>
  );
}
