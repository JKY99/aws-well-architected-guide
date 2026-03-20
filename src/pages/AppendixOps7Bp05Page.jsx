import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps7Bp05Page() {
  return (
    <article className="doc-content">
      <h1>OPS07-BP05 — 시스템 및 변경 배포에 대한 정보에 기반한 결정</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>

      <p>
        워크로드에 변경을 배포할 때 정보에 기반한 결정을 내립니다.
        변경이 거버넌스를 준수하도록 보장합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        워크로드에 변경을 배포할 때 정보에 기반한 결정을 내립니다.
        변경이 거버넌스를 준수합니다.
        실패한 배포를 처리하기 위한 프로세스가 준비되어 있습니다.
        새로운 워크로드 버전을 배포하기 전에 리소스 활용도 기준이 수립됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>실패한 배포를 처리하기 위한 프로세스 없이 워크로드에 변경을 배포하는 경우</li>
        <li>거버넌스 정책을 준수하지 않는 프로덕션 환경을 변경하는 경우</li>
        <li>리소스 활용도 기준을 수립하지 않고 새로운 워크로드 버전을 배포하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드에 대한 실패한 변경에 대비가 되어 있음</li>
        <li>워크로드의 변경이 거버넌스 정책을 준수함</li>
        <li>배포 성공 기준이 명확하게 정의되어 있음</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>성공적인 배포를 위한 기준을 수립하고 검토합니다.</li>
        <li>롤백을 위한 시나리오를 개발하고 이점과 위험을 비교합니다.</li>
        <li>모든 변경이 거버넌스 정책을 준수하는지 확인합니다.</li>
        <li>탁상 연습을 수행하여 실패한 변경을 모델링하고, 완화 전략을 문서화하고, 롤백 절차를 검증합니다.</li>
        <li>이해관계자들과 조율하여 배포 결정을 공동으로 내립니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Config — 거버넌스 준수 모니터링</li>
        <li>AWS CloudFormation — 인프라 변경 추적 및 검증</li>
        <li>Amazon CloudWatch — 배포 전후 리소스 활용도 모니터링</li>
      </ul>

      <PageNav />
    </article>
  );
}
