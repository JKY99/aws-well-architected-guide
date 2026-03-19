import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost4Bp03Page() {
  return (
    <article className="doc-content">
      <h1>COST04-BP03 — Spot 인스턴스로 비용 최소화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>인터럽트에 내성이 있는 워크로드(배치 처리, CI/CD, 개발/테스트)에 Spot 인스턴스를 활용하여 온디맨드 대비 최대 90% 비용을 절감합니다.</p>
      <h2>원하는 결과</h2>
      <p>적합한 워크로드에 Spot 인스턴스를 활용하여 컴퓨팅 비용을 대폭 절감합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>스팟 인터럽트에 대비하지 않습니다.</li>
        <li>스테이트풀 워크로드에 스팟을 사용합니다.</li>
        <li>단일 인스턴스 유형만 사용합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최대 90% 비용을 절감합니다.</li>
        <li>동일 예산으로 더 많은 컴퓨팅 리소스를 확보합니다.</li>
        <li>유연한 용량을 확보합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>배치/CI/개발 환경에 스팟을 적용합니다.</li>
        <li>다양한 인스턴스 풀을 구성합니다.</li>
        <li>인터럽트 처리 로직을 구현합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Spot Instances</li>
        <li>EC2 Auto Scaling (혼합 인스턴스)</li>
        <li>AWS Batch</li>
        <li>Amazon EMR</li>
      </ul>
      <PageNav />
    </article>
  );
}
